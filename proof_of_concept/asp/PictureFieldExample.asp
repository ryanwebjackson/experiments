<%@ Page Language="VB" AutoEventWireup="false" CodeFile="Default.aspx.vb" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    
    <style>
    
        #gvPictures
        {
            text-align: center;
        }
    
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="gvPictures">
    
        This is just an example of how to create a picture field inside of a gridview.<br />
        <br />
        1) Create the Database and Tables<br />
        2) Create the Gridview and SqlDataSource<br />
        3) Point to the right fieldname and have the correct image paths.<br />
        <br />
        <asp:GridView ID="gvPictures" runat="server" AutoGenerateColumns="False" 
            DataKeyNames="PicID" DataSourceID="SqlDataSource1" Height="436px" 
            Width="662px">
            <Columns>
                <asp:BoundField DataField="PicID" HeaderText="PicID" InsertVisible="False" 
                    ReadOnly="True" SortExpression="PicID" />
                <asp:ImageField DataImageUrlField="URL" DataImageUrlFormatString="~/images/{0}" 
                    HeaderText="Picture">
                </asp:ImageField>
            </Columns>
        </asp:GridView>
        <asp:SqlDataSource ID="SqlDataSource1" runat="server" 
            ConnectionString="<%$ ConnectionStrings:ConnectionString %>" 
            SelectCommand="SELECT [PicID], [Title], [URL] FROM [Pictures]">
        </asp:SqlDataSource>
        <br />
        <br />
    
    </div>
    </form>
</body>
</html>
