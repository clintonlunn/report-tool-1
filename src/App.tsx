import "./App.css";
import { featureLayer, view } from "./arcgis";
import FeatureTable from "./FeatureTable";
import Map from "./Map";

function App() {
  const handleSelectionChange = async (
    event: __esri.FeatureTableSelectionChangeEvent,
    selectedRows: __esri.Graphic[]
  ) => {
    const layerView = await view.whenLayerView(featureLayer);
    (layerView as any)._highlightIds.clear();
    if (selectedRows.length > 0) {
      const objectIds = await layerView.queryObjectIds({
        objectIds: selectedRows.map(
          (row) => row.attributes[featureLayer.objectIdField]
        ),
      });
      layerView.highlight(objectIds);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <Map />
      </div>
      <div className="container">
        <FeatureTable
          layer={featureLayer}
          view={view}
          highlightOnRowSelectEnabled={false}
          onSelectionChange={handleSelectionChange}
          singleSelectEnabled={true}
        />
      </div>
    </div>
  );
}

export default App;
