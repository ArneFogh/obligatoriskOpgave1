# obligatoriskOpgave1

Opgave 2

https://api.dropboxapi.com/2/files/create_folder_v2

{
    "autorename": false,
    "path": "/Test/Testmappe"
}

Status kode: 200 OK

Nu er der forbindelse

Jeg vil sige at den stemmer overens med Uniform Interface da der er en unik identifikator.



Opgave 3

Endpoint: https://api.dropboxapi.com/2/files/get_metadata

HTTP verb: {
    "include_deleted": false,
    "include_has_explicit_shared_members": false,
    "include_media_info": false,
    "path": "/Test/Testmappe"
}

Status kode: 200 OK




Opgave 4

Endpoint : https://content.dropboxapi.com/2/files/upload

HTTP verb: {
    "autorename": false,
    "mode": "add",
    "mute": false,
    "path": "/Test/Testmappe/ViTester.txt",
    "strict_conflict": false
}

Vælg : Text

application/octet-stream

Headers : Dropbox-API-Arg
Value: {    "autorename": false,    "mode": "add",    "mute": false,    "path": "/Test/Testmappe/ViTester.txt",    "strict_conflict": false}

Status kode 200

Opgave 5

Endpoint: https://api.dropboxapi.com/2/files/delete_v2

HTTP verb: 
{
    "path": "/Test/Testmappe/ViTester.txt"
}

POST

application/json

raw - JSON

status kodde 200

Opgave 7

Endpoint : https://api.dropboxapi.com/2/files/search_v2

HTTP verb: {
    "match_field_options": {
        "include_highlights": false
    },
    "options": {
        "file_status": "active",
        "filename_only": false,
        "max_results": 20,
        "path": "/Folder"
    },
    "query": "cat"
}

POST 

application/json

raw - JSON

status kodde 200

Opgave 8 

Endpoint : https://api.dropboxapi.com/2/files/move_v2

HTTP verb:
{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/Test/Testmappe",
    "to_path": "/Test/Testmappe2"
}

POST 

application/json

raw - JSON

status kodde 200


Opagve 9 

Endpoint : https://api.dropboxapi.com/2/files/copy_v2

HTTP verb: 
{
    "allow_ownership_transfer": false,
    "allow_shared_folder": false,
    "autorename": false,
    "from_path": "/Test/Testmappe2",
    "to_path": "/Test/Testmappe"
}

POST 

application/json

raw - JSON

status kodde 200

Opagve 10






