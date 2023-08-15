import Preloader from "./movies/Preloader/Preloader";
import Error from "./error/Error";

function PageAwait({ isLoading, error, children }) {
  if (isLoading) return <Preloader/>;
  if (error.status) return <Error/>;

  return children;
}

export default PageAwait
