// get values at a vertex
neighbors(v){
    // checks if vertex is present then returns the value
    if(this.hasVertex(v)){
        return this.adjList.get(v)
    }
    // if vertex is not present returns false
    return false
}