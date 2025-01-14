import chefClaudeLogo from "/Users/swayamsingal/Desktop/Programming/Web dev/AdvFrontend/React/06_chef_claude/src/assets/chef-claude-icon.png"

export default function Header() {
    return (
        <header>
            <img src={chefClaudeLogo}/>
            <h1>Chef Claude</h1>
        </header>
    )
}