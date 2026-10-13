import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import "./style.css";
import starList from "../../mocks/mock";

function App() {
    return <PageWrapper stars={starList} />;
}

export default App;