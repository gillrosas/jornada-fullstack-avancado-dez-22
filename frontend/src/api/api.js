const createRequest = function (url,body) {
   return fetch(
      url, 
    {
        method:  "POST",
        body: JSON.stringify(body),
        headers: new Headers({
        "Content-type": "application/json",
            })
          }
        )
}

const getRequest = function(url) {
  return fetch(
    url, {
      method: "GET"
    }
  )
}


const deletetRequest = function(url) {
  return fetch(
    url, {
      method: "DELETE"
    }
  )
}

const api = {
  baseUrl:  function() { "http://localhost:3000"},
  item: {

    endpoint: function() {api.baseUrl() + "item"
      
    },

    list: function() { getRequest(this.endpoint())
    },
    create: function () { createRequest(this.endpoint, body ())
    },
    delete: function (id) { deleteRequest(this.endpoint + "/" + id())
    },
  },

  category: {
    endpoint: function () {api.baseUrl() + "category"
    },

    list: function () {getRequest(this.endpoint())
    }, 
  },
}

export default api