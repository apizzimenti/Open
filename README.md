<img src="https://dl.dropbox.com/s/ajla1dwvb9n0zf3/Large.png?dl=0" alt="default logo" width="100" align="middle">

###Open - v0.2.2
Open is a webapp for those that want to design or re-design webpages, 
but have little experience using HTML, CSS, or JavaScript.

####Implementation
Set up the Open forms in your HTML:

```
<div id="open">
    <div id="outerwrapper">
        <div id="holder">
            <button id="titlebar">Open</button>
        </div>

        <div id="wrapper">
            <form>
                <select id="choice">
                    <option value="1">Background Color</option>
                    <option value="2">Menu/Header Colors</option>
                    <option value="3">Fonts</option>
                    <option value="4">Font Color</option>
                    <option value="5">Header Font</option>
                    <option value="6">Link Color</option>
                    <option value="7">Link Formatting</option>
                    <option value="8">Link Formatting (Hover)</option>
                </select>
            </form>

            <form>
                <input id="input" type="text" placeholder="colors, fonts"/>
            </form>

            <button id="apply">Apply</button>

        </div>
    </div>
</div>
```

Then grab the .js and SASS files and directly implement it OR edit it at your leisure.