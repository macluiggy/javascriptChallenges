function queueTime(customers, n) {
    //TODO
    let time = 0;
    var total = 0;
    for (let j = 0; j < customers.length; j++) {
        const cust = customers[j];
        total += cust;
    }
    if (total < n) {
        time = customers.length;
        console.log(time);
        return time;
    } else {
        for (let i = 0; i < customers.length; i += n) {
            const customer = customers[i];
            time += customer;
        }
        console.log(time);
    return time;
    }
    
  }

  queueTime([2,2,3,3,4,4], 4);