import React from 'react';

let name2 = "Vaman";
// Child Component 
const AboutCompany = (fun) => {
    return (
        <div>
            <p >AboutChild</p>
            {/* <p> {props.name}</p> */}
            <input type="text" onSubmit={() => fun()}></input>
            <p></p>
            <button type="button" onClick={() => name2}>
                Click me
         </button>
        </div>
    );
}

export default AboutCompany;

// const AuthWebsite = ({ logout, user }) => {
//     return (
//       <div>
//         <h2>Hello, {user}</h2>
//         <div className="logout_button" onClick={() => logout()}>
//           logout
//         </div>
//       </div>
//     );
//   };