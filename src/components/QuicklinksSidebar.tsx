interface SidebarTabsProps {
  tabs: TabData[]
  activeTab: string
  onTabChange: (tabId: string) => void
}
interface TabData {
  id: string
  title: string
}
const Sidebar: React.FC<SidebarTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex w-fit pl-[5vw] pt-5 ">
      <div className="w-fit bg-white  ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex w-full justify-start border-b border-gray-400 px-2 py-2 ${
              activeTab === tab.id
                ? 'bg-gray-50 text-blue-600'
                : 'text-gray-600 hover:text-blue-400'
            }`}
          >
            <p className="font-medium">{tab.title}</p>
          </button>
        ))}
      </div>
    </div>
  )
}
export default Sidebar