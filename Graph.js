function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.vertexList = [];
    this.edges = 0;
    this.adj = [];
    this.edgeTo = [];
    this.marked = [];
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.showGraphTex = showGraphTex;
    this.dfs = dfs;
    this.bfs = bfs;
    this.pathTo = pathTo;
    this.topSortHelper = topSortHelper;
    this.topSort = topSort;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph() {
    for (let i = 0; i < this.vertices; i++) {
        let str = i + '->';
        for (let j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined) {
                str += this.adj[i][j] + ' ';
            }
        }
        console.log(str);
    }
}

function showGraphTex() {
    for (let i = 0; i < this.vertices; i++) {
        let str = this.vertexList[i] + '->';
        for (let j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] !== undefined && this.adj[i][j] > i) {
                str += this.vertexList[this.adj[i][j]] + ' ';
            }
        }
        console.log(str);
    }
}

// 深度优先搜索 depthFirst
function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log('Visisted vertex: ' + v);
    }
    this.adj[v].forEach((w) => {
        if (!this.marked[w]) {
            this.dfs(w);
        }
    })
}

// 广度优先搜索
function bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
        let v = queue.shift();
        if (v !== undefined) {
            console.log("Visisted vertex: " + v);
        }
        this.adj[v].forEach((w) => {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        })
    }
}

function pathTo(t, v) {
    for (let i = 0; i < this.vertices; i++) {
        this.marked[i] = false;
    }
    this.bfs(t);
    let source = t;
    if (!this.marked[v]) {
        return undefined;
    }
    let path = [];
    for (let i = v; i != source; i = this.edgeTo[i]) {
        path.unshift(i);
    }
    path.unshift(source);
    let str = '';
    for (let i in path) {
        if (i < path.length - 1) {
            str += path[i] + '->'
        } else {
            str += path[i];
        }
    }
    console.log(str);
    return path;
}

function topSort() {
    let stack = [];
    let visited = [];
    for (let i = 0; i < this.vertices; i++) {
        visited[i] = false;
    }
    for (let i = 0; i < this.vertices; i++) {
        if (visited[i] == false) {
            this.topSortHelper(i, visited, stack);
        }
    }
    for (let i = stack.length - 1; i >= 0; i--) {
        console.log(this.vertexList[stack[i]])
    }
}
function topSortHelper(v, visited, stack) {
    visited[v] = true;

    this.adj[v].forEach((w) => {
        if (!visited[w]) {
            this.topSortHelper(w, visited, stack)
        }
    })
    stack.push(v)
}
