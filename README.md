# CityGML Boundaries

Retrieve gml:exterior and gml:interior boundaries from a given XML string

## Usage

```javascript
var citygmlBoundaries = require("citygml-boundaries");

var xml = "..."; // Some CityGML
var boundaries = citygmlBoundaries(xml); // {exterior: [...], interior: [...]}
```
