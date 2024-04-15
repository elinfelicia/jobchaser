import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type JobFilterState = {
  searchTerm: string;
  filterFullTime: boolean;
  filterRemote: boolean;
  filterUSA: boolean;
}

const initialState: JobFilterState = {
  searchTerm: '',
  filterFullTime: false,
  filterRemote: false,
  filterUSA: false,
};

const jobFilterSlice = createSlice({
  name: 'jobFilter',
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    toggleFilterFullTime: (state) => {
      state.filterFullTime = !state.filterFullTime;
    },
    toggleFilterRemote: (state) => {
      state.filterRemote = !state.filterRemote;
    },
    toggleFilterUSA: (state) => {
      state.filterUSA = !state.filterUSA;
    },
    clearFilters: (state) => {
      state.searchTerm = '';
      state.filterFullTime = false;
      state.filterRemote = false;
      state.filterUSA = false;
    },
  },
});

export const {
  setSearchTerm,
  toggleFilterFullTime,
  toggleFilterRemote,
  toggleFilterUSA,
  clearFilters,
} = jobFilterSlice.actions;

export default jobFilterSlice.reducer;
