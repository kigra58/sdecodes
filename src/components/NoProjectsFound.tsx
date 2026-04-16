const NoProjectsFound = () => {
  return (
    <div className="text-center py-16">
      <span className="material-symbols-outlined text-6xl text-on-surface-variant mb-4">search_off</span>
      <h3 className="text-xl font-semibold text-on-surface mb-2">No projects found</h3>
      <p className="text-on-surface-variant">Try adjusting your search or filter criteria</p>
    </div>
  );
};

export default NoProjectsFound;
