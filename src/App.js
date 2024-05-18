import logo from "./logo.svg";
import "./App.css";
import Tree from "react-d3-tree";
import { transformData } from "./helper";

//https://www.dhiwise.com/post/how-to-implement-react-d3-tree-in-your-project/

const nodeSvgShape = {
  shape: "circle",
  shapeProps: {
    r: 10,
    fill: "green",
  },
};

function App() {
  const data = {
    animal: {
      id: 523722,
      name: "Parent Male",
      sire: {
        id: 523723,
        name: "Grand Parent Mal",
        sire: {
          id: 523724,
          name: "GG Parent Male",
          sire: null,
          dam: null,
        },
        dam: {
          id: 523725,
          name: "GG Parent FM",
          sire: null,
          dam: null,
        },
      },
      dam: {
        id: 523726,
        name: "Grand Parent FM",
        sire: {
          id: 523724,
          visualId: "GG Parent Male",
          sire: null,
          dam: null,
        },
        dam: {
          id: 523725,
          name: "GG Parent FM",
          sire: null,
          dam: null,
        },
      },
    },
    children: [
      {
        id: 523729,
        name: "Child Female",
        children: [
          {
            id: 523731,
            name: "G Child FeMale",
            children: [],
          },
          {
            id: 523730,
            name: "G Child Male",
            children: [],
          },
        ],
      },
      {
        id: 523727,
        name: "Child Male",
        children: [
          {
            id: 523731,
            name: "G Child FeMale",
            children: [],
          },
          {
            id: 523730,
            name: "G Child Male",
            children: [],
          },
        ],
      },
    ],
  };

  // const data2 = {
  //   name: "Parent Male",
  //   children: [
  //     {
  //       name: "Grand Parent Mal",
  //       children: [
  //         {
  //           name: "GG Parent Male",
  //           children: [],
  //         },
  //         {
  //           name: "GG Parent FM",
  //           children: [],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Grand Parent FM",
  //       children: [
  //         {
  //           name: "GG Parent Male",
  //           children: [],
  //         },
  //         {
  //           name: "GG Parent FM",
  //           children: [],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Child Female",
  //       children: [
  //         {
  //           name: "G Child FeMale",
  //           children: [],
  //         },
  //         {
  //           name: "G Child Male",
  //           children: [],
  //         },
  //       ],
  //     },
  //     {
  //       name: "Child Male",
  //       children: [
  //         {
  //           name: "G Child FeMale",
  //           children: [],
  //         },
  //         {
  //           name: "G Child Male",
  //           children: [],
  //         },
  //       ],
  //     },
  //   ],
  // };

  const t = transformData(data);

  return (
    <div className="App">
      {/* <div> */}
      {/* <h1>Tree</h1> */}
      <div id="treeWrapper" style={{ width: "500em", height: "600em" }}>
        <Tree data={t} nodeSvgShape={nodeSvgShape} />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
