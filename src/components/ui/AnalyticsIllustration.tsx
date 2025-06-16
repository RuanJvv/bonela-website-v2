import { LineChartIllustration } from "../../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "../Table"

const assessmentSummary = [
  {
    name: "Sasol Limited",
    completed: "2,847 assessments",
    candidates: "2,680 employees",
    avgScore: "82.1%",
    completion: "+18.5%",
    accuracy: "+15.2%",
    insights: "+12.3%",
    bgColor: "bg-blue-500",
    changeType: "positive",
  },
  {
    name: "Discovery Holdings",
    completed: "1,956 assessments",
    candidates: "1,789 employees",
    avgScore: "87.8%",
    completion: "+12.4%",
    accuracy: "+9.7%",
    insights: "+14.6%",
    bgColor: "bg-purple-500",
    changeType: "positive",
  },
  {
    name: "Bidvest Group",
    completed: "1,432 assessments",
    candidates: "1,347 employees",
    avgScore: "78.3%",
    completion: "-3.1%",
    accuracy: "+4.2%",
    insights: "+7.9%",
    bgColor: "bg-indigo-500",
    changeType: "mixed",
  },
]

export default function AssessmentAnalytics() {
  return (
    <div className="h-150 shrink-0 overflow-hidden [mask-image:radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">Client Development Performance</h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          6,235 assessments
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+587 assessments (12.4%)</span>{" "}
          <span className="font-normal text-gray-500">Past quarter</span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-200 shrink-0" />
        <TableRoot className="mt-6 min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Client Organization</TableHeaderCell>
                <TableHeaderCell className="text-right">Assessments</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Employees
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Dev Score
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Progress Rate
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Skills Growth
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Leadership
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {assessmentSummary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.completed}</TableCell>
                  <TableCell className="text-right">{item.candidates}</TableCell>
                  <TableCell className="text-right">{item.avgScore}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : item.changeType === "mixed"
                            ? "text-amber-700"
                            : "text-red-700"
                      }
                    >
                      {item.completion}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : item.changeType === "mixed"
                            ? "text-emerald-700"
                            : "text-red-700"
                      }
                    >
                      {item.accuracy}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : item.changeType === "mixed"
                            ? "text-emerald-700"
                            : "text-red-700"
                      }
                    >
                      {item.insights}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
