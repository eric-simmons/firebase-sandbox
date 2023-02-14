import { storage  } from "./utils/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { useState } from 'react'

function App() {

  const [files, setFiles] = useState(null)

  const handleFileChange = (e) => {
    setFiles(e.target.files)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    for (const file of files) { 
      const imagesRef = ref(storage, `images/${file.name}`)
      const snapshot = await uploadBytes(imagesRef, file)
      const url = await getDownloadURL(snapshot.ref)
      console.log(url)
    }
  }

  return (
    <div className="App">
      <form method="post" encType="multipart/form-data" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="file">Choose file to upload</label>
          <input onChange={handleFileChange} type="file" id="file" name="file" multiple />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
