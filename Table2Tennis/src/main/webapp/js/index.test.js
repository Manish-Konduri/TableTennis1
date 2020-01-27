const {load,callURL}=require('./main.js')
const {AddName,AddEmail,AddImage}=require('./URL.js')

beforeAll(()=>{
    AddName("Rahul")
    AddImage("https://randomuser.me/api/portaits/men/1.jpg")
    AddEmail("rahul@pramati.com")
})

test('Testing AddName',function(){
    expect(document.getElementsByClassName('name').innerHTML).toEqual("Rahul")
})
test('Testing AddEmail',function(){
    expect(document.getElementsByClassName('EMAIL').innerHTML).toEqual("rahul@pramati.com")
})
test('Testing AddImage',function(){
    expect(document.getElementsByClassName('img')).toBeTruthy()
})