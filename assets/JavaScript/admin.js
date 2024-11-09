const vendor_key = "vendors";  // products table name for local stroage

function addProduct()
{
    let vname=document.getElementById("vendor_name").value;
    let age=document.getElementById("vendor_age").value;
    let service=document.getElementById("vendor_service").value;
    let email=document.getElementById("vendor_email").value;
    let experience=document.getElementById("vendor_experience").value;
    let phone=document.getElementById("vendor_phone").value;
    

    if (vname.trim() == '' || age.trim() == '' || service.trim() == '' || email.trim() == '' || experience.trim() == '' || phone.trim() == '')
    {
        alert("Plaese fill all details");
        return;
    }
    else
    {
        var x = JSON.parse(localStorage.getItem(vendor_key)) || [];

        for (let i = 0; i < x.length; i++)
        {
            
            if (x[i].email == email)
            {
                alert("Vendor already exists");   // to check whwther a product is present or not
                return;
            }

        }

        var obj = { name : vname, age, email, service, experience, phone  };

        x.push(obj);
        
        localStorage.setItem(vendor_key, JSON.stringify(x));

        alert("Vendor added successfully");
        
       register_vendors()

    }
}


function register_vendors()
{
    let table = document.getElementById('admin_vendor_table');

    let x = JSON.parse(localStorage.getItem(vendor_key)) || [];

    if(x.length == 0)
    {
        table.innerHTML = "<tr><td colspan='9'>No Vendor Found</td></tr>";
        return;
    }
    else
    {
        table.innerHTML = "";

        for (let i = 0; i < x.length; i++) 
        {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${i+1}</td>
                            <td>${x[i].name || ""}</td>
                            <td>${x[i].age|| ""}</td>
                            <td>${x[i].email || ""}</td>
                            <td>${x[i].phone}</td>
                            <td>${x[i].service || ""}</td>
                             <td>${x[i].experience}</td>
                            <td>
                                <button style="margin: 4px;" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#editProducts" onclick="edit_vendor(${i})">Edit</button>

                                <button style="margin: 4px;" class="btn btn-success" onclick="delete_vendor(${i})">Delete</button>

                                
                            </td>`;

            table.appendChild(tr);
        }

    }

}

function delete_vendor(index)
{
    if(confirm('Are you sure to delete this Vendor?'))
        {
            let x = JSON.parse(localStorage.getItem(vendor_key)) || [];
        
            x.splice(index, 1);
    
            localStorage.setItem(vendor_key, JSON.stringify(x));
    
            alert('Vendor Deleted');
    
            register_vendors();
        }
}

function edit_vendor()
{

}
function admin_get_users()
{

    let table = document.getElementById('admin_user_table');

    let x = JSON.parse(localStorage.getItem(user_key)) || [];

    if(x.length == 0)
    {
        table.innerHTML = "<tr><td colspan='6'>No Users Found</td></tr>";
        return;
    }
    else
    {
        table.innerHTML = "";

        for (let i = 0; i < x.length; i++) 
        {
            let tr = document.createElement('tr');
            tr.innerHTML = `<td>${i+1}</td>
                            <td>${x[i].username || ""}</td>
                            <td>${x[i].email || ""}</td>
                            <td>${x[i].orders || 0}</td>
                            <td>${x[i].status == 1 ? "Active" : "Not Active"}</td>
                            <td>
                                <button style="margin: 4px;" class="btn btn-danger" onclick="block_user(${i})">Block</button>
                                <button style="margin: 4px;" class="btn btn-success" onclick="unblock_user(${i})">Unblock</button>
                                <button style="margin: 4px;" class="btn btn-danger" onclick="delete_user(${i})">Delete</button>
                            </td>`;

            table.appendChild(tr);
        }

    }

}