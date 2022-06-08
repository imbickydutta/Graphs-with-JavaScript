// addEdge
addEdge(v1, v2){
    // check if graph has v1
    // if not add v1
    if(!this.hasVertex(v1)){
        this.addVertex(v1);
    }

    // check if graph has v2
    // if not add v2
    if(!this.hasVertex(v2)){
        this.addVertex(v2);
    }


    // Add v2 to v1 values
    let val = this.neighbors(v1);

    if(!val.includes(v2)){
        val.push(v2)
        this.edges++
    }
} 