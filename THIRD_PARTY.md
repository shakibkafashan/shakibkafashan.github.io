# Data and image attribution

## Street and building geometry

Manhattan road geometry and the building footprints/heights in this site are
derived from OpenStreetMap. © OpenStreetMap contributors. These derived databases
are made available under the Open Database License (ODbL) 1.0.

- Attribution and license: https://www.openstreetmap.org/copyright
- ODbL: https://opendatacommons.org/licenses/odbl/1-0/
- Street data retrieved through Overpass API, 2026-11-06, bounding box
  south 40.695, west -74.034, north 40.779, east -73.955.
- Included roads: primary, secondary, tertiary, residential, unclassified, trunk.
- Financial District footprints/heights use the vis.gl Manhattan building sample:
  https://github.com/visgl/deck.gl-data/blob/master/examples/trips/buildings.json
- Additional Midtown heights/footprints were retrieved through Overpass API.
- Heights are exaggerated in the fixed isometric view for legibility.
- Street connectivity and one-way tags prepare synthetic trips. Vehicles and
  routing tradeoffs are illustrations, not observed NYC traffic or safety results.
- Processing: `scripts/build-manhattan.py` and `scripts/build-city-scene.py`.
  The offline preparation requires shapely, pyproj and pyshp; the website itself
  requires no packages, API keys or map service.

## Shoreline

Shoreline-clipped borough boundaries: NYC Department of City Planning, NYBB 16A.
The bundled geometry is simplified and clipped to the visible map frame.
Sample archive distributed by GeoPandas/geodatasets:
https://github.com/geopandas/geodatasets/blob/main/data_backup/nybb_16a.zip

## Portrait

The portrait was supplied directly by Shakib Kafashan for this website on
2026-11-06. The original image is unchanged; CSS frames the face more closely.

## Design reference

The short-trail, extruded-building treatment was inspired by deck.gl TripsLayer:
https://deck.gl/examples/trips-layer
This website uses its own lightweight Canvas renderer and does not bundle deck.gl.
