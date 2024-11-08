export const createRefSlice = (set) => (
    
    {    
            homeRef: null,
            aboutRef: null,
            servicesRef: null,
            projectsRef: null,
            contactRef: null,
            setHomeRef: (ref) => set((state) => ({ ...state, homeRef: ref })),
            setAboutRef: (ref) => set((state) => ({ ...state, aboutRef: ref })),
            setServicesRef: (ref) => set((state) => ({ ...state, servicesRef: ref })),
            setProjectsRef: (ref) => set((state) => ({ ...state, projectsRef: ref })),
            setContactRef: (ref) => set((state) => ({ ...state, contactRef: ref })),
    }
)