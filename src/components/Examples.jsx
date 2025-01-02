import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";
import Tabs from "./Tabs";

export default function Examples() {
  const [selectedTab, setSelectedTab] = useState();
  function handleClick(clickedButton) {
    setSelectedTab(clickedButton);
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTab === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {selectedTab ? (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTab].code}</code>
            </pre>
          </div>
        ) : (
          <p>Please select a tab</p>
        )}
      </Tabs>
    </Section>
  );
}
