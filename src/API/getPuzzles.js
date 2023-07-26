const getPuzzles = async () => {
    const request = await fetch(
        //quad_perctanges
        `https://collecture.org/api/puzzles`,
        {
            method: "GET",
            headers: {
            },
        }
    );

    const response = await request.json();
    if (!response.success) {
        console.log(response);
    } else {
        console.log("success");
    }
    return response.data;
};

export default getPuzzles;
