(() => {
	const map = L.map("map", { zoomControl: true }).setView([39.5, -98.35], 4);

	L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		attribution:
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	const markers = [];
	for (const g of GOATS) {
		const m = L.marker([g.latitude, g.longitude]).addTo(map);
		g.html = [
			`<p><strong>${g.name}</strong>`,
			g.address &&
				`<p><a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(g.address)}" target="_blank" rel="noopener noreferrer">${g.address}</a>`,
			...(g.notes ?? []).map((n) => `<p>${n}`),
			g.url &&
				`<p><a href="${g.url}" target="_blank" rel="noopener noreferrer">${g.url}</a>`,
			g.submittedBy && `<p>Submitted by: ${g.submittedBy}`,
		]
			.filter((line) => line)
			.join("<br>");
		m.bindPopup(g.html);
		markers.push({ goat: g, marker: m });
	}

	if (markers.length) {
		const group = L.featureGroup(markers.map((m) => m.marker));
		map.fitBounds(group.getBounds().pad(0.25));
	}

	let youMarker = null;
	let youCoords = null;

	const statusEl = document.getElementById("status");
	const locateBtn = document.getElementById("locate-btn");
	const toggleBtn = document.getElementById("toggle-btn");
	const listItems = document.getElementById("list-items");

	locateBtn.addEventListener("click", () => {
		if (!navigator.geolocation) {
			showStatus("Your browser doesn't support geolocation.");
			return;
		}

		const ok = confirm(
			"Find your location?\n\n" +
				"Privacy: your location is only used in your browser to center the map " +
				"and sort the goat list. It is never sent to our server or shared with anyone.",
		);
		if (!ok) return;

		locateBtn.disabled = true;
		locateBtn.textContent = "Locating…";

		navigator.geolocation.getCurrentPosition(
			(pos) => {
				youCoords = pos.coords;
				const icon = L.divIcon({
					className: "",
					html: '<div class="you-dot"></div>',
					iconSize: [16, 16],
					iconAnchor: [8, 8],
				});
				if (youMarker) youMarker.remove();
				youMarker = L.marker([youCoords.latitude, youCoords.longitude], {
					icon,
				}).addTo(map);
				youMarker.bindPopup(
					"You are here (this dot only exists in your browser).",
				);
				map.setView([youCoords.latitude, youCoords.longitude], 10);
				locateBtn.disabled = false;
				locateBtn.textContent = "Re-locate me";
				hideStatus();
				if (document.body.classList.contains("list-view")) renderList();
			},
			(err) => {
				locateBtn.disabled = false;
				locateBtn.textContent = "Locate me";
				showStatus("Couldn't get your location: " + err.message);
			},
			{ enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
		);
	});

	toggleBtn.addEventListener("click", () => {
		const toList = !document.body.classList.contains("list-view");
		document.body.classList.toggle("list-view", toList);
		toggleBtn.textContent = toList ? "Show map" : "Show closest list";
		if (toList) renderList();
	});

	function renderList() {
		listItems.innerHTML = "";

		const entries = !youCoords
			? GOATS
			: GOATS.map((g) => ({
					...g,
					dist: youCoords
						? haversineKm(
								youCoords.latitude,
								youCoords.longitude,
								g.latitude,
								g.longitude,
							)
						: null,
				})).sort((a, b) => a.dist - b.dist);

		for (const g of entries) {
			const li = document.createElement("li");
			li.innerHTML = g.html;
			if (g.dist != null) {
				li.innerHTML += `<p><span class="meta">${formatDistance(g.dist)}</span>`;
			}
			li.style.cursor = "pointer";
			li.addEventListener("click", (ev) => {
				if (ev.target.closest("a")) return;
				document.body.classList.remove("list-view");
				toggleBtn.textContent = "Show closest list";
				map.setView([g.latitude, g.longitude], 13);
				const found = markers.find((m) => m.goat === g);
				if (found) found.marker.openPopup();
			});
			listItems.appendChild(li);
		}
	}

	function haversineKm(lat1, lon1, lat2, lon2) {
		const R = 6371;
		const toRad = (d) => (d * Math.PI) / 180;
		const dLat = toRad(lat2 - lat1);
		const dLon = toRad(lon2 - lon1);
		const a =
			Math.sin(dLat / 2) ** 2 +
			Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
		return 2 * R * Math.asin(Math.sqrt(a));
	}

	function formatDistance(km) {
		const miles = km * 0.621371;
		return `${miles.toFixed(1)} mi (${km.toFixed(1)} km) away`;
	}

	function showStatus(msg) {
		statusEl.textContent = msg;
		statusEl.classList.add("visible");
	}
	function hideStatus() {
		statusEl.classList.remove("visible");
	}
})();
