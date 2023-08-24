
// function Func_Comp() {
//   return (
//     <>
//       <h1>day la Function Components</h1>

//     </>
//   )
// }

// export default Func_Com
function Func_Comp() {
    //  day la noi code js
    const sum = (a, b) => {
        return a + b
    }
    return (
        <>
            <div>tong cua 3 va 4 la {sum(3, 4)}</div>
            <div> {10 < 20 ? "dung" : "sai"} </div>
        </>
    );
}

export default Func_Comp;

