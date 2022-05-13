$('#addBtn').on('click', function() {
    $.ajax({
        url: 'http://localhost:3000/add',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                name: $('#addName').val(), no: $('#addNo').val(), className: $('#addClassName').val()
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            $('#addName').val(''); $('#addNo').val(''); $('#addClassName').val('');
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function() {
                location.reload()
            }, 1000)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: jqXhr.responseJSON.message,
                showConfirmButton: false,
                timer: 1000
              })
        }
    })
})

function deleteStudent (id) {
    $.ajax({
        url: `http://localhost:3000/delete`,
        dataType: 'json',
        type: 'delete',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                id
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            console.log('success', data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function() {
                location.reload()
            }, 1000)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    })
}

function updateStudent (id) {
    $.ajax({
        url: `http://localhost:3000/detail`,
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                id, name: $('#upt_name').val(), no: $('#upt_no').val(), className: $('#upt_className').val()
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            let {_id, name, no, className} = data.detail
            $('#upt_name').val(name); $('#upt_no').val(no); $('#upt_className').val(className); $('#upt_id').val(_id);
        },
        error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    })
}

$('#studentUpdateButton').on('click', function() {
    $.ajax({
        url: `http://localhost:3000/update`,
        dataType: 'json',
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify(
            {
                id: $('#upt_id').val(), name: $('#upt_name').val(), no: $('#upt_no').val(), className: $('#upt_className').val()
            }
        ),
        processData: false,
        success: function (data, textStatus, jQxhr) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: data.message,
                showConfirmButton: false,
                timer: 1000
              })
            setTimeout(function() {
                location.reload()
            }, 1000)
        },
        error: function (jqXhr, textStatus, errorThrown) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: jqXhr.responseJSON.message,
                showConfirmButton: false,
                timer: 1000
              })
        }
    })
})