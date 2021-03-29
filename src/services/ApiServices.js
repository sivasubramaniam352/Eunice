
const URI = 'http://192.168.3.127:5050/v1'
export const getUser = async (token) => {
    let response;
    try {
      response = await fetch(`${URI}/user/getUserInfo`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        },
        
   
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error)
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  };

  export const signIn = async (creds) => {
    let response;
    try {
      response = await fetch(`${URI}/user/simple/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  };

  export const signUp = async (creds) => {
    let response;
    try {
      response = await fetch(`${URI}/user/signUp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  };

  export const inviteUser = async(bod, token) =>{
    let response;
    try {
      response = await fetch(`${URI}/workspace/user/invite`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
         body:JSON.stringify(bod)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  }
  export const addtoWs = async(creds) =>{
    let response;
    try {
      response = await fetch(`${URI}/workspace/add/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  } 

  export const createWs = async(creds) =>{
    let response;
    try {
      response = await fetch(`${URI}/workspace/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        
        body:JSON.stringify(creds)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  } 

  export const otpSignIn = async(email) => {

    let response;
    try {
      response = await fetch(`${URI}/user/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

        },
        
        body:JSON.stringify(email)
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  }

  export const verifyOtp = async(otp, token) => {
    console.log(otp, token);
    let response;
    try {
      response = await fetch(`${URI}/user/verifyCode`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
        
        body:JSON.stringify({confirmation_code:String(otp)})
      });
      if (response.status === 200) {
        return await response.json();
      } else if (response.status !== 401) {
        return await response.json();
      } else {
        var errorResponse = await response.json();
        throw new Error(errorResponse.error);
      }
    } catch (e) {
      throw e;
    }
  }
  
export const createChannel = async(bod) =>{
  let response;
  try {
    response = await fetch(`${URI}/channel/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

      },
      
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const getWorkSpaceInfo = async(wsId)=>{
  let response;
  try {
    response = await fetch(`${URI}/workspace/getInfo?wsId=${wsId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}
export const getInfoWsUsers = async(wsId) =>{
  let response;
  try {
    response = await fetch(`${URI}/workspace/getAll/users/${wsId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const kickout = async(bod) =>{
  let response;
  try {
    response = await fetch(`${URI}/workspace/kickout/user`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const updateUserDesignation = async(bod) =>{
  let response;
  try {
    response = await fetch(`${URI}/workspace/user/designation/update`, 
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const getAllchats = async(workSpaceId,channelId,userId)=>{
  console.log(workSpaceId,channelId,userId, "ID");
  let response;
  try {
    response = await fetch(`${URI}/chat/getAll/${workSpaceId}/${channelId}/${userId}`, 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }

}

export const addChat = async(bod) => {
  let response;
  try {
    response = await fetch(`${URI}/chat/create`, 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }
}

export const updateChat = async(bod, token) =>{
  let response;
  try {
    response = await fetch(`${URI}/chat/update`, 
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }

}

export const deleteChat = async(bod, token) =>{
  let response;
  try {
    response = await fetch(`${URI}/chat/remove`, 
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization:token
      },
      body:JSON.stringify(bod)
    });
    if (response.status === 200) {
      return await response.json();
    } else if (response.status !== 401) {
      return await response.json();
    } else {
      var errorResponse = await response.json();
      throw new Error(errorResponse.error);
    }
  } catch (e) {
    throw e;
  }

}

