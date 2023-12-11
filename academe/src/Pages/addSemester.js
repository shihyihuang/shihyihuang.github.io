import DynamicTable from "../Components/dynamicTable";

const AddSemester = () => {

    // const navigate = useNavigate();

    // const pageRoutes = {
    //     addSemester: '/addSemester',
    //   };
      
    //   const handleClick = (page) => {
    //     const route = pageRoutes[page];
        
    //     if (route) {
    //       navigate(route);
    //     } else {
    //       console.error("Can't find your page:", page);
    //     }
    //   };

    return (
        <>
            <DynamicTable
            column1={"Semester"}
            column2={"WAM"}/>
        </>
    );
};

export default AddSemester;