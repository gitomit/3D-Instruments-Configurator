/**
 * opens the shop window to buy a configurated guitar online (yet to be implemented) with the sweetalert library
 * @return {undefined}
 */
function openShop() {
    swal.withForm({
    	title: 'Contact Us!',
    	text: 'The shop function is not yet implemented. Please send us an email and we will get in contact with you about your configuration.',
    	confirmButtonColor: '#878181',
    	confirmButtonText: 'Send!',
    	closeOnConfirm: true,
    	formFields: [
    	{id: 'name', placeholder: 'name'},
    	{id: 'forename', placeholder: 'forename'},
    	{id: 'email', placeholder: 'email'}]
    })
}
