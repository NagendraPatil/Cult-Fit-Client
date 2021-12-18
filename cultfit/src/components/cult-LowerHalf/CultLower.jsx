import WorkoutGrid from "./WorkoutGrid/WorkoutGrid";
import QuickLinks from "./QuickLinks/QuickLinks";
import BeSpirited from "./BeSpirited/BeSpirited";
import FAQ from "./FAQ/FAQ";
import Footer from "../Footer/Footer";
import Footer2 from "./Footer_2/Footer2";
import CultFooter from "./Footer_2/CultFooter";

export const CultLower = () => {
  return (
    <>
      <WorkoutGrid />
      <QuickLinks />
      <BeSpirited />
      <FAQ />
      <CultFooter />
    </>
  );
};

export default CultLower;
