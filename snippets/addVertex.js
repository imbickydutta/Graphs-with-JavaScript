// adding a vertex
addVertex(v){
    // set the vertex value to an empty array
    this.adjList.set(v, [])
    // increment count of vertices
    this.vertices++
}