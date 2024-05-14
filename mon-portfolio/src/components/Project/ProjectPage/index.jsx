function ProjectPage({ project }) {
  return (
    <>
      <div key={project.id}>
        <div className="">
          <div className="">
            <div className="">
              <h1 className="">{project.name}</h1>
              <p className="">{project.description}</p>
            </div>
          </div>
        </div>
        {/* <div className="description-equipment">
    <Collapse title="Description" content={.} />
    <Collapse
      title="Équipements"
      content={housing.equipments}
      modeList={true}
    />
  </div> */}
      </div>
    </>
  );
}

export default ProjectPage;
