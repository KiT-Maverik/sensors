// MODULES
import React from 'react';

// COMPONENTS
import {Footer} from "src/components/footer/footer";
import {Header} from "src/components/header/header";
import {Label} from "src/components/label/label";
import {SensorsGrid} from "src/components/sensors-grid/sensors-grid";

function App() {
    return (
        <>
            <Header/>
            <main>
                <Label/>
                <SensorsGrid/>
            </main>
            <Footer/>
        </>
    );
}

export default App;
