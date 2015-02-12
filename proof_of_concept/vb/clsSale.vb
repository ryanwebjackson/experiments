'Author: Ryan W. Jackson
'Purpose: to provide a transaction processing system for the Not Your Mom's Basement gaming store
'Date Last Revised: 16 December 2009
'Form Purpose: to provide a class for data from a "New Sale" form to be pushed into the database

#Region " Options "
Option Explicit On
Option Strict On
#End Region

#Region " Imports "
Imports System.Data
Imports System.Data.OleDb
#End Region

Public Class clsSale
    Dim mstrName As String
    Dim mstrMembershipID As String
    Dim mstrDate As Date = Now
    Dim msngTotal As Single = frmNewSale.Total
    Dim mstrSQL As String
    Dim mstrCN As String = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=Sales.mdb;"


    'Property Declarations
    Public Property Name() As String
        Get
            Return mstrName
        End Get
        Set(ByVal value As String)
            mstrName = value
        End Set
    End Property
    Public Property MembershipID() As String
        Get
            Return mstrMembershipID
        End Get
        Set(ByVal value As String)
            mstrMembershipID = value
        End Set
    End Property
    Public Property SaleDate() As Date
        Get
            Return mstrDate
        End Get
        Set(ByVal value As Date)
            mstrDate = value
        End Set
    End Property
    Public Property Total() As Single
        Get
            Return msngTotal
        End Get
        Set(ByVal value As Single)
            msngTotal = value
        End Set
    End Property

    'Constructor Function Area

    'Default constructor function
    Public Sub New()
        'Default New Sale code
        mstrName = frmNewSale.txtName.Text
        mstrMembershipID = frmNewSale.txtMembershipID.Text
    End Sub

    'Method - Opens Sales Access database
    ' to the Sales table
    Sub SubmitData()


        'Instantiate Connection Object
        Dim objConnection As New OleDbConnection(mstrCN)

        'Instantiate Command Object
        Dim objCommand As New OleDbCommand()
        objCommand.Connection = objConnection
        objCommand.Connection.Open()

        'Define SQL Statement
        mstrSQL = "insert into sales (MembershipID,Name,SaleDate,Total) " _
        & "values ('" _
        & MembershipID & "','" _
        & Name & "',#" _
        & SaleDate & "#," _
        & Total & ");"

        'Pass SQL into Command
        objCommand.CommandText = mstrSQL

        'Execute SQL statements
        objCommand.ExecuteNonQuery()

        'Close Connection
        objConnection.Close()
        objConnection.Dispose()

    End Sub
End Class
