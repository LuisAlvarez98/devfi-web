import React, { useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./views/Landing";
import { ChakraProvider } from "@chakra-ui/react";
import NavbarComponent from "./views/components/NavbarComponent";
import FooterComponent from "./views/components/FooterComponent";

export default function App() {
  const shareRef = useRef<HTMLDivElement>(null);
  const collabRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  return (
    <ChakraProvider>
      <NavbarComponent
        shareRef={shareRef}
        collabRef={collabRef}
        objectRef={objectRef}
      />
      <Router>
        <div>
          <Switch>
            <Route path="/login"></Route>
            <Route path="/register"></Route>
            <Route path="/">
              <Landing
                shareRef={shareRef}
                collabRef={collabRef}
                objectRef={objectRef}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      <FooterComponent />
    </ChakraProvider>
  );
}
