<!-- This will render the searchbar when render_search_bar is called in the header_navbar partial -->
<template>
  <div
    class="container-full site-searchbar site-searchbar--ursus"
    role="search"
  >
    <!-- This will render the searchbar when render_search_bar is called in the header_navbar partial -->

    <form
      class="form-group mx-auto mb-0 site-searchbar__search-form site-searchbar__search-form--ursus"
      role="search"
      action="http://localhost:8080"
      accept-charset="UTF-8"
      method="get"
    >
      <input name="utf8" type="hidden" value="✓" />

      <label for="search_field" class="sr-only">Search in</label>

      <div class="input-group">
        <label for="q" class="sr-only">search for</label>
        <input
          type="text"
          name="q"
          id="q"
          value
          placeholder="Search"
          class="search-q q form-control site-searchbar__query-field"
          data-autocomplete-enabled="false"
          data-autocomplete-path="/catalog/suggest"
        />
        <div
          class="input-group-append site-searchbar__search-icon site-searchbar__search-icon--ursus site-searchbar__search-icon--sinai"
        >
          <button
            type="submit"
            class="btn btn-light border-0 search-btn"
            id="search"
          >
            <svg width="19" height="19" viewBox="0 0 16 16">
              <title>Search</title>
              <g fill="none">
                <g stroke="#005587">
                  <circle cx="6" cy="6" r="5" />
                  <path
                    d="M14 14L10 10"
                    style="stroke-linejoin:round;stroke-width:2;"
                  />
                </g>
              </g>
            </svg>
          </button>
        </div>

        <!-- All Fields -->
        <select
          name="search_field"
          id="search_field"
          title="Targeted search options"
          class="custom-select site-searchbar__dropdown"
        >
          <option selected="selected" value="all_fields">All Fields</option>
          <option value="title_tesim">Title</option>
          <option value="subject_tesim">Subject</option>
        </select>
      </div>
    </form>
  </div>
</template>
