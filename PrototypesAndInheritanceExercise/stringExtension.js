(function stringExtension(){
    String.prototype.ensureStart = function(s){return this.startsWith(s) ? this.toString() : s + this.toString()}
    String.prototype.ensureEnd = function(s){return this.endsWith(s) ? this.toString() : this.toString() + s}
    String.prototype.isEmpty = function(){return this.length === 0}
    String.prototype.truncate = function(n){
        if(n <= 3) return '.'.repeat(n)
        if(this.toString().length <= n) return this.toString();
        else {
            let last = this.substring(0, n - 2).lastIndexOf(' ')
            return last !== -1 ? this.substring(0, last) + '...' : this.substring(0, n - 3) + '...'
        }
    }
    String.format = function(string, ...params){
        params.forEach((e, i) => {
            string = string.replace(`{${i}}`, e);            
        });

        return string;
    }
})()