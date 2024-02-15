import Preloader from "./movies/Preloader/Preloader";
import PageError from "./error/PageError";

function PageAwait({ isLoading, error, children }) {
  if (isLoading) return <Preloader />;

  if (error.status) {
    console.error(error.message);
    return <PageError />;
  }

  return children;
}

export default PageAwait;
