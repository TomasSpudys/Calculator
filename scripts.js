function calculateConversionValues(event) {
    event.preventDefault();

    const impression = parseFloat(document.getElementById('impression-input').value);
    const ctr = parseFloat(document.getElementById('ctr-input').value);
    const visitToLead = parseFloat(document.getElementById('visit-to-lead-input').value);
    const leadsToCustomer = parseFloat(document.getElementById('leads-to-customer-input').value);

    let visitValue = calculateVisit(impression, ctr);
    document.getElementById('visit-input').value = visitValue;

    if (visitValue && !isNaN(visitValue)) {
        let leads = calculateLeads(visitValue, visitToLead);
        document.getElementById('leads-input').value = leads;

        if (leads && !isNaN(leads)) {
            let customers = calculateCustomers(leads, leadsToCustomer);
            document.getElementById('customer-input').value = customers;
        }
    }
}

function calculateVisit(impression, ctr) {
    if (!impression || !ctr) {
        return "Enter valid numbers";
    }
    return (impression / 100) * ctr;
}

function calculateLeads(visit, visitToLead) {
    if (!visit || !visitToLead) {
        return "Enter valid numbers";
    }
    return (visit / 100) * visitToLead;
}

function calculateCustomers(leads, leadsToCustomer) {
    if (!leads || !leadsToCustomer) {
        return "Enter valid numbers";
    }
    return (leads / 100) * leadsToCustomer;
}

function calculateCostValues(event) {
    event.preventDefault();

    const totalCost = parseFloat(document.getElementById('total-cost-input').value);
    const impressions = parseFloat(document.getElementById('impression-input').value);
    const visits = parseFloat(document.getElementById('visit-input').value);
    const leads = parseFloat(document.getElementById('leads-input').value);
    const customers = parseFloat(document.getElementById('customer-input').value);
    console.log(customers);
    let cpm = calculateCpm(totalCost, impressions)
    document.getElementById('cpm-input').value = cpm;
    
    let cpc = calculateCpc(totalCost, visits);
    document.getElementById('cpc-input').value = cpc;

    let costPerLead = calculateCostPerLead(totalCost, leads);
    document.getElementById('cost-per-lead-input').value = costPerLead;

    let costPerCustomer = calculateCostPerCustomer(totalCost, customers);
    document.getElementById('cost-per-customer-input').value = costPerCustomer;
}

function calculateCpm(totalCost,impressions) {
    return (totalCost && impressions) ? (totalCost / impressions) * 1000 : 0;
}

function calculateCpc(totalCost, visits) {
    return (totalCost && visits) ? totalCost / visits : 0;
}

function calculateCostPerLead(totalCost, leads) {
    return (totalCost && leads) ? totalCost / leads : 0; 
}

function calculateCostPerCustomer(totalCost, customers) {
    return (totalCost && customers) ? totalCost / customers : 0; 
}

function calculateRevenueValues(event) {
    event.preventDefault();

    const revenue = parseFloat(document.getElementById('revenue-input').value);
    const visits = parseFloat(document.getElementById('visit-input').value); 
    const leads = parseFloat(document.getElementById('leads-input').value); 
    const customers = parseFloat(document.getElementById('customer-input').value); 

    const totalCost = parseFloat(document.getElementById('total-cost-input').value);
    let roi = calculateRoi(revenue, totalCost);
    document.getElementById('roi-input').value = roi;

    let revenuePerClick = calculateRevenuePerClick(visits, revenue);
    document.getElementById('revenue-per-click-input').value = revenuePerClick;

    let revenuePerLead = calculateRevenuePerLead(leads, revenue);
    document.getElementById('revenue-per-lead-input').value = revenuePerLead;

    let revenuePerCustomer = calculateRevenuePerCustomer(customers,revenue);
    document.getElementById('revenue-per-customer-input').value = revenuePerCustomer;
}

function calculateRoi(revenue, totalCost) {
    return totalCost ? ((revenue - totalCost) / totalCost) * 100 : 0;
}

function calculateRevenuePerClick(visits, revenue) {
    return visits ? revenue / visits : 0;
}

function calculateRevenuePerLead(leads, revenue) {
    return leads ? revenue / leads : 0;
}

function calculateRevenuePerCustomer(customers, revenue) {
    return customers ? revenue / customers : 0;
}