"use client";

import { transitionHelper } from "./transitionHelper";
import React, { TransitionFunction, use, useEffect, useLayoutEffect, useRef, useTransition } from "react";

const TransitionProvder = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, startTransition] = useTransition();

  const promiseCallbacks = useRef<Record<
    "resolve" | "reject",
    (value: unknown) => void
  > | null>(null);

  useEffect(() => {
    window.onpopstate = function () {
         console.log("TRANSITIONER - POPSTATE");
        // transitionHelper({
        //     updateDOM: () => {
        //         return new Promise((resolve, reject) => {
        //             // @ts-ignore
        //             promiseCallbacks.current = { resolve, reject };
        //         });
        //     }
      // });
      //@ts-ignore
        document.startViewTransition(() => {
            // return new Promise((resolve, reject) => {
            //     // @ts-ignore
            //     promiseCallbacks.current = { resolve, reject };
            // });
        });
        startTransition(() => {});
    };
  }, []);
/*
  useLayoutEffect(() => {
    console.log("LAYOUT EFFECT PROVIDER");

    return () => {
        console.log("TRANSITIONER - END");
        if (promiseCallbacks.current) {
            console.log("TRANSITIONER - RESOLVE");
            promiseCallbacks.current.resolve(undefined);
            promiseCallbacks.current = null;
        }
        };
  });*/
    

//   useEffect(() => {
//     console.log("TRANSITIONER - START");
    
//     if (isLoading && !promiseCallbacks.current) {
//         console.log("TRANSITIONER - SETUP");
//         promiseCallbacks.current = {
//             resolve: () => {},
//             reject: () => {},
//         };
//     }

//     return () => {
//         console.log("TRANSITIONER - END");
//         if (promiseCallbacks.current) {
//             console.log("TRANSITIONER - RESOLVE");
//           promiseCallbacks.current.resolve(undefined);
//           promiseCallbacks.current = null;
//         }
//       };
//   }, [isLoading]);

  return children;
};

export default TransitionProvder;