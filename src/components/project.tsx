import { useParams } from "react-router-dom";
import Header from "./header";
import Task from "./task";

const Project = () => {

  const { name } = useParams();

  console.log(name);

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
