import Preloader from "./movies/Preloader/Preloader";
import Error from "./error/Error";

/**
 * @param {{isLoading: boolean, error: {status: boolean, message: string}, children: JSX.Element}} props
 * @returns {JSX.Element}
 * @constructor
 */
function PageAwait({ isLoading, error, children }) {
  if (isLoading) return <Preloader/>;
  if (error.status) return <Error/>;

  return children;
}

export default PageAwait