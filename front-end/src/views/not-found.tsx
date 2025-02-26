import { Button } from "@/components/common/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <main className="min-h-screen bg-background flex items-center justify-center relative isolate overflow-hidden">
      <section className="max-w-[540px] mx-auto text-center space-y-6">
        <h1 className="font-montserrat text-foreground-header text-2xl font-semibold">
          We couldn’t find that page
        </h1>
        <p className="text-lg text-muted-foreground">
          It seems like we couldn’t find that page. Please try again or contact
          an administrator if the problem persists.
        </p>
        <Button
          className="min-w-56 min-h-12"
          onClick={handleBack}
          aria-label="Return to previous page"
        >
          Take me Back
        </Button>
      </section>

      <div
        className="absolute text-[18rem] md:text-[25rem] font-semibold opacity-10 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        404
      </div>
    </main>
  );
};

export default NotFound;
