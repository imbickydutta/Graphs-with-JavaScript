// update values at a vertex
updateVertex(v, val){
    // check if vertex v exists
    // if not create one
    if(!this.hasVertex(v)){
        this.createVertex(v);
    }
    // fetch the length of existing neighbors or adjacent nodes
    let prevLength = this.getNeighbors(v).length;
    
    // decrement no of edges by prev length
    this.edges -= prevLength;

    this.adjList.set(v, val);

    // increment no of edges with updated length;
    this.edges += val.length;
    
    // all elements inside val array should be a vertex 
    // if not then create one
    val.forEach(el=>{
        if(!this.hasVertex(el)){
            this.createVertex(el);
        }
    })
}