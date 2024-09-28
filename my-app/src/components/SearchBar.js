import React from 'react'; 


// import './SearchBar.css';


const SearchBar=()=>{
  return(
    <div className="h-screen flex items-center">
<form class="max-w-md mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
           
        </div>
        <p class="px-24 py-9 text-2xl">You can ask anything</p>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500    " placeholder="Ask anything..." required style={{ width: '500px', height: '100px' }} />
       
    </div>
</form>
</div>
  );
};

export default SearchBar;
