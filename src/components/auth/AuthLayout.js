import { Await, useLoaderData, useOutlet } from "react-router-dom";
import { Suspense } from "react";
import Preloader from "../movies/Preloader/Preloader";
import { AuthProvider } from "./AuthProvider";
import Error from "../error/Error";

const AuthLoader = () => (
  <div
    style={{
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Preloader/>
  </div>
);

const AuthLayout = () => {
  const outlet = useOutlet();
  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<AuthLoader/>}>
      <Await
        resolve={userPromise}
        errorElement={<Error/>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};

export default AuthLayout;
