function StudentList() {
    const students = ["Pauline", "Luke", "Gülsah"]


    return ( 
        <div className="list">
            <h2>StudentList</h2>
             {/* { students.map(name => <p>{name}</p>) } */}
             {/* { students.map((name, i) => <p key={i}>{name}</p>) } */}
             { students.map((name, i) => <p key={uuidv4()}>{name}</p>) }
             {/* this folliwing two lines tell, that everything in an array will be rendered */}
             {[<p>test</p>,<p>test</p>]}
             {["test", "test"]}
        </div>
     );
}

export default StudentList;