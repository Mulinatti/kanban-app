import Header from "./header";
import Task from "./task";

const Project = () => {

  return (
    <>
      <Header/>
      <section className="grid grid-cols-3 gap-3 max-h-16 p-5">
        <Task/>
        <Task/>
        <Task/>
        <Task/>     
      </section>
    </>
  );
};

export default Project;
