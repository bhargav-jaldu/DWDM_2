        let n= prompt("Enter no of paris: ");
    //  ArrayList<Integer> arr=new ArrayList<Integer>();
    const arr = [];
        for(let i=0;i<=n;i++){
            alert("Enter number of positives and negatives: ");
            let x= prompt("Enter no of positive: ")
            let y= prompt("Enter no of negatives: ")
            arr.push(parseInt(x));
            arr.push(parseInt(y));
        }
        //  ArrayList<Double> gini = new ArrayList<>();
        const gini = []

                     for(let i=0;i<arr.length;i=i+2){
                         let u=arr[i]+arr[i+1]
                         let y=arr[i]/u;
                         let a=arr[i+1]/u;
                         let e=1-y*y-a*a;
                         gini.push(e);                        
}

        document.write("<div class = 'container'><h1>gini values are: </h2> ");

 for (let i = 0; i < gini.length; i++) {
            document.write(gini[i] + " ");
        }
        
                //  ArrayList<Double> ie1 = new ArrayList<>();
                const ie1 = []

                  let j=1;
                  let w=0;
                  let i=0;
                      while(i<arr.length){
                          if(i==0){
                          w=(arr[i]+arr[i+1]);
                             i=i+2;
                          }
                          
                         else{
                         let x=(arr[i]+arr[i+1]);
                         let y=(x/w)*gini[j];
                             ie1.push(y);
                             j=j+1;
                             i=i+2;
                         }
                      }
                      
         
    document.write("<h1>Gini values individual:  </h1>");

                         let answer=0;

                  for (let i1 = 0; i1 < ie1.length; i1=i1+1) {
                  document.write(ie1[i1] + " ");
        }

    document.write("<h1>Total gini: </h1>");
                  for (let i1 = 0; i1 < ie1.length; i1=i1+1) {
                  let d1 =ie1[i1];
                         if(isNaN(d1)){
                             
                         }
                         else{
                             answer=answer+ie1[i1];
                         }}
    document.write(answer + "</div>");