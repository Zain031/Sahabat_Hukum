import React from 'react'

const AddQuestion = () => {
  return (
    <div>
         <div
        className="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
        style={{ background: "rgba(0,0,0,.7)" }}
      >
        <div className="border border-blue-500  modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            {/*Title*/}
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold text-gray-500">Add Product</p>
            </div>
            {/*Body*/}

            <div className="my-5 mr-5 ml-5 flex justify-center">
              <form onSubmit={handleAddProduct}>
                <div className="">
                  <div className="">
                    <label htmlFor="names" className="text-md text-gray-600">
                      Name
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      name="name"
                      className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                      placeholder="Product name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                    />
                  </div>
                  <div>
                    <div className="">
                      <label htmlFor="phone" className="text-md text-gray-600">
                        Price
                      </label>
                    </div>
                    <div className="">
                      <input
                        type="text"
                        id="phone"
                        autoComplete="off"
                        name="price"
                        className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                        placeholder="Product price"
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        value={price}
                      />
                    </div>
                  </div>
                  <div className="">
                    <label
                      htmlFor="id_number"
                      className="text-md text-gray-600"
                    >
                      Description
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="text"
                      id="id_number"
                      autoComplete="off"
                      name="description"
                      className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                      placeholder="Description"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      value={description}
                    />
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <div>
                        <label
                          htmlFor="id_number"
                          className="text-md text-gray-600"
                        >
                          Stock
                        </label>
                      </div>
                      <div className="">
                        <input
                          type="text"
                          id="id_number"
                          autoComplete="off"
                          name="stock"
                          className="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md"
                          placeholder="Stock"
                          onChange={(e) => {
                            setStock(e.target.value);
                          }}
                          value={stock}
                        />
                      </div>
                    </div>

                    <div className="mg-3 text-gray-600">
                      <div>
                        <label htmlFor="categoryId" className="form-label">
                          Category{" "}
                        </label>
                      </div>

                      <div className=" mb-4 ">
                        <select
                          className="form-select p-3 w-56 border-2 border-gray-300 rounded-md  "
                          name="categoryId"
                          onChange={(e) => {
                            setCategoryId(e.target.value);
                          }}
                          value={categoryId}
                        >
                          <option value="">Select Category</option>
                          {category.map((item) => {
                            return (
                              <>
                                <option value={item.id}>{item.name}</option>
                              </>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 text-gray-600">
                    <div>
                      <label htmlFor="imgUrl" className="form-label">
                        Image URL{" "}
                      </label>
                    </div>
                    <div>
                      <input
                        onChange={(e) => {
                          setImgUrl(e.target.value);
                        }}
                        value={imgUrl}
                        type="text"
                        className="form-control p-3 w-full border-2 border-gray-300 rounded-md "
                        id="imgUrl"
                        placeholder="Image URL"
                        name="imgUrl"
                      />
                    </div>
                    <div
                      id="imgUrl"
                      className="form-text text-sm bg-yellow-100 mt-2 p-1 rounded-sm"
                    >
                      <ion-icon name="alert-circle-outline"></ion-icon> If you
                      don't add an image URL, it will be assigned to random
                      image. Don't worry, you can add the image later.
                    </div>
                  </div>
                  <Button />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default AddQuestion